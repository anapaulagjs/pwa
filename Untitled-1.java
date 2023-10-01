//Código da integração:                                                                                 import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class LoginApp {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/projeto_clube";
    private static final String USERNAME = "seu_usuario";
    private static final String PASSWORD = "sua_senha";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo! Por favor, faça o login.");

        System.out.print("Nome de usuário: ");
        String username = scanner.nextLine();

        System.out.print("Senha: ");
        String password = scanner.nextLine();

        // Conectar ao banco e inserir os dados do usuário
        try {
            Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
            insertUser(connection, username, password);
            connection.close();
            System.out.println("Usuário cadastrado com sucesso!");
        } catch (SQLException e) {
            System.err.println("Erro ao conectar ao banco de dados: " + e.getMessage());
        }

        scanner.close();
    }

    private static void insertUser(Connection connection, String username, String password) throws SQLException {
        String insertQuery = "INSERT INTO membros (username, password) VALUES (?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);
            preparedStatement.executeUpdate();
        }
    }
}