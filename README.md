# Tasks Module

This project is a **Tasks Management Module** built using **Laravel** (backend) and **ReactJS** (frontend). It includes authentication and role-based permissions, allowing admins to manage all tasks while users can manage their own.

## Features

- **User Authentication** (Login, Registration, Logout)
- **Roles & Permissions** (Admin, User)
- **CRUD for Tasks** (Create, Read, Update, Delete)
- **API Authentication** for secure communication
- **Unit Tests** ensuring code reliability

## Technologies Used

### Backend (Laravel)
- Laravel 10/11
- Sanctum (for API authentication)

### Frontend (ReactJS)
- React 18
- React Router
- Tailwind CSS (for styling)

## Project Setup

### Backend Setup (Laravel)
1. Clone the repository:
   ```sh
   git clone git@github.com:jpdegracia/laravel-backend-api.git
   cd your-repo/backend
   ```
2. Install dependencies:
   ```sh
   composer install
   ```
3. Create `.env` file and set up database configuration:
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
4. Run database migrations:
   ```sh
   php artisan migrate --seed
   ```
5. Start the Laravel server:
   ```sh
   php artisan serve
   ```

### Frontend Setup (ReactJS)
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm run dev
   ```

## Running Unit Tests

Run Laravel unit tests:
```sh
php artisan test
```

## API Endpoints

| Method | Endpoint           | Description          |
|--------|------------------|----------------------|
| POST   | `/api/login`     | User login          |
| POST   | `/api/register`  | User registration   |
| POST   | `/api/logout`    | User logout         |
| GET    | `/api/posts`     | Get all posts       |
| POST   | `/api/posts`     | Create a post       |
| PUT    | `/api/posts/{id}` | Update a post       |
| DELETE | `/api/posts/{id}` | Delete a post       |

## Contributing

Feel free to fork the repository and submit pull requests with improvements.

## License

This project is open-source and available.

