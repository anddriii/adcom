# ADCOM Backend

This is the backend application for the Android Developer Community (ADCOM) website, built with the Laravel framework.

---

## Project Structure

```
Laravel Project (Backend)

├── app/                    # Core application logic
│   ├── Filament/          # Admin panel components (Filament)
│   ├── Http/              # Controllers, middleware, and form requests
│   ├── Models/            # Eloquent models
│   └── Providers/         # Service providers

├── bootstrap/             # Laravel bootstrap files
├── config/                # Configuration files
├── database/              # Database-related files
│   ├── factories/         # Model factories for testing or seeding
│   ├── migrations/        # Migration files for schema definition
│   └── seeders/           # Data seeding classes

├── public/                # Publicly accessible assets
│   └── storage/           # Storage symlink for file uploads

├── resources/             # Views, raw assets, and translations
│   ├── css/               # CSS files
│   ├── js/                # JavaScript files
│   └── views/             # Blade template files

├── routes/                # Route definitions
│   ├── api.php            # API routes
│   └── web.php            # Web routes

├── storage/               # File storage
│   ├── app/               # Application-generated files
│   ├── framework/         # Framework cache and sessions
│   └── logs/              # Log files

├── tests/                 # Automated test cases
└── vendor/                # Composer-managed PHP dependencies

Environment & Config:
├── .env                   # Environment configuration
├── .env.example           # Sample environment file
├── composer.json          # PHP package dependencies
├── package.json           # Node.js dependencies
├── artisan                # Laravel CLI
└── phpunit.xml            # PHPUnit configuration
```

---

## Requirements

- PHP >= 8.1
- Composer
- MySQL or MariaDB

---

## Installation

Follow these steps to set up the project:

1. **Clone the repository**

   ```bash
   git clone https://github.com/anddriii/adcom.git
   cd adcom/BE
   ```

2. **Install PHP dependencies**

   ```bash
   composer install
   ```

3. **Copy environment configuration**

   ```bash
   cp .env.example .env
   ```

4. **Configure your `.env` file**

   Update the database and other settings in the `.env` file:

   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

5. **Generate application key**

   ```bash
   php artisan key:generate
   ```

6. **Run database migrations and seeders**

   ```bash
   php artisan migrate --seed
   ```

7. **Create symbolic link for storage**

   ```bash
   php artisan storage:link
   ```

8. **Start the development server**

   ```bash
   php artisan serve
   ```

   Application will be available at:  
   **http://localhost:8000**

---

## Admin Panel Access

You can access the admin panel at:  
**http://localhost:8000/admin**

**Default Credentials:**

- Email: `test@example.com`
- Password: `password`

---

## Useful Commands

- Clear application cache:  
  `php artisan cache:clear`

- Clear configuration cache:  
  `php artisan config:clear`

- Clear route cache:  
  `php artisan route:clear`

- Clear view cache:  
  `php artisan view:clear`

---

## API Documentation

API documentation is available at:  
**http://localhost:8000/api/documentation**

---

## Notes

This README covers the essential setup and usage instructions for running the Laravel backend.  
For further customization or contributions, feel free to fork or submit pull requests.

---
