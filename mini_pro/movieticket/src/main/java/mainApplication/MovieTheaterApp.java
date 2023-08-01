package mainApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Scanner;

// Class representing a Movie with its properties
class Movie {
    String name;
    int duration;
    int rating;
    int num_tickets;
}

// Class representing a Theater with its properties and a list of Movies
class Theater {
    String name;
    String location;
    List<Movie> movies;
}

// Main class for the Movie Theater Application
public class MovieTheaterApp {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini_project";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "23dec@winter";

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        try {
            // Load the MySQL JDBC driver and establish a connection
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Create tables if they don't exist
            createTablesIfNotExists(connection);

            int choice;
            do {
                // Display the menu and handle user's choice
                System.out.println("Menu:");
                System.out.println("1. Add theater");
                System.out.println("2. Delete theater");
                System.out.println("3. Add movie");
                System.out.println("4. Display theaters");
                System.out.println("5. Display movies");
                System.out.println("6. Book Tickets");
                System.out.println("7. Exit");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character after reading the integer input

                switch (choice) {
                    case 1:
                        addTheater(connection);
                        break;
                    case 2:
                        deleteTheater(connection);
                        break;
                    case 3:
                        addMovie(connection);
                        break;
                    case 4:
                        displayTheaters(connection);
                        break;
                    case 5:
                        displayMovies(connection);
                        break;
                    case 6:
                        bookTicket(connection);
                        break;
                    case 7:
                        System.out.println("Exiting program.");
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            } while (choice != 7);

            // Close the database connection
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Method to create tables if they don't exist in the database
    private static void createTablesIfNotExists(Connection connection) throws SQLException {
        Statement statement = connection.createStatement();
        // Create the tables if they don't exist
        String createTheaterTable = "CREATE TABLE IF NOT EXISTS theaters (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), location VARCHAR(255))";
        String createMovieTable = "CREATE TABLE IF NOT EXISTS movies (id INT AUTO_INCREMENT PRIMARY KEY, theater_id INT, name VARCHAR(255), duration INT, rating INT, num_tickets INT)";

        statement.executeUpdate(createTheaterTable);
        statement.executeUpdate(createMovieTable);

        statement.close();
    }

    // Method to add a new Theater to the database
    private static void addTheater(Connection connection) throws SQLException {
        Theater theater = new Theater();
        System.out.print("Enter theater name: ");
        theater.name = scanner.nextLine();
        System.out.print("Enter theater location: ");
        theater.location = scanner.nextLine();

        PreparedStatement statement = connection.prepareStatement("INSERT INTO theaters (name, location) VALUES (?, ?)");
        statement.setString(1, theater.name);
        statement.setString(2, theater.location);
        statement.executeUpdate();
        System.out.println(theater.name + " added successfully!");

        statement.close();
    }

    // Method to delete a Theater from the database
    private static void deleteTheater(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        PreparedStatement statement = connection.prepareStatement("DELETE FROM theaters WHERE name = ?");
        statement.setString(1, theaterName);
        int rowsAffected = statement.executeUpdate();
        if (rowsAffected > 0) {
            System.out.println(theaterName + " deleted successfully!");
        } else {
            System.out.println(theaterName + " not found.");
        }

        statement.close();
    }

    // Method to add a new Movie to the database under a specific Theater
    private static void addMovie(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        PreparedStatement theaterStatement = connection.prepareStatement("SELECT id FROM theaters WHERE name = ?");
        theaterStatement.setString(1, theaterName);
        ResultSet theaterResult = theaterStatement.executeQuery();
        if (theaterResult.next()) {
            int theaterId = theaterResult.getInt("id");
            Movie movie = new Movie();
            System.out.print("Enter movie name: ");
            movie.name = scanner.nextLine();
            System.out.print("Enter movie duration (in minutes): ");
            movie.duration = scanner.nextInt();
            System.out.print("Enter movie rating (out of 10): ");
            movie.rating = scanner.nextInt();
            movie.num_tickets = 100;

            PreparedStatement movieStatement = connection.prepareStatement("INSERT INTO movies (theater_id, name, duration, rating, num_tickets) VALUES (?, ?, ?, ?, ?)");
            movieStatement.setInt(1, theaterId);
            movieStatement.setString(2, movie.name);
            movieStatement.setInt(3, movie.duration);
            movieStatement.setInt(4, movie.rating);
            movieStatement.setInt(5, movie.num_tickets);
            movieStatement.executeUpdate();
            System.out.println(movie.name + " added to " + theaterName + " successfully!");

            movieStatement.close();
        } else {
            System.out.println(theaterName + " not found.");
        }

        theaterStatement.close();
    }

    // Method to display all available Theaters
    private static void displayTheaters(Connection connection) throws SQLException {
        Statement statement = connection.createStatement();
        ResultSet result = statement.executeQuery("SELECT * FROM theaters");

        System.out.println("Theaters:");
        while (result.next()) {
            int id = result.getInt("id");
            String name = result.getString("name");
            String location = result.getString("location");
            System.out.println(id + ". " + name + " (" + location + ")");
        }

        statement.close();
    }

    // Method to display all available Movies in a specific Theater
    private static void displayMovies(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        PreparedStatement statement = connection.prepareStatement("SELECT * FROM theaters t JOIN movies m ON t.id = m.theater_id WHERE t.name = ?");
        statement.setString(1, theaterName);
        ResultSet result = statement.executeQuery();

        if (result.next()) {
            System.out.println("Movies at " + theaterName + ":");
            do {
                String movieName = result.getString("name");
                int duration = result.getInt("duration");
                int rating = result.getInt("rating");
                int numTickets = result.getInt("num_tickets");
                System.out.println(movieName + " (" + duration + " mins, " + rating + "/10, Tickets Available: " + numTickets + ")");
            } while (result.next());
        } else {
            System.out.println(theaterName + " not found.");
        }

        statement.close();
    }

    // Method to book tickets for a specific Movie in a specific Theater
    private static void bookTicket(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        System.out.print("Enter movie name: ");
        String movieName = scanner.nextLine();

        System.out.print("Enter number of tickets to book: ");
        int numTickets = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character after reading the integer input

        PreparedStatement statement = connection.prepareStatement("SELECT m.num_tickets FROM theaters t JOIN movies m ON t.id = m.theater_id WHERE t.name = ? AND m.name = ?");
        statement.setString(1, theaterName);
        statement.setString(2, movieName);
        ResultSet result = statement.executeQuery();

        if (result.next()) {
            int availableTickets = result.getInt("num_tickets");
            if (numTickets <= availableTickets) {
                PreparedStatement updateStatement = connection.prepareStatement("UPDATE movies m JOIN theaters t ON t.id = m.theater_id SET m.num_tickets = m.num_tickets - ? WHERE t.name = ? AND m.name = ?");
                updateStatement.setInt(1, numTickets);
                updateStatement.setString(2, theaterName);
                updateStatement.setString(3, movieName);
                updateStatement.executeUpdate();
                System.out.println(numTickets + " tickets booked for " + movieName + " at " + theaterName + ".");
            } else {
                System.out.println("Not enough tickets available.");
            }
        } else {
            System.out.println(movieName + " not found at " + theaterName);
        }

        statement.close();
    }
}
