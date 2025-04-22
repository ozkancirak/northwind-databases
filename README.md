# Northwind Database

A simple web application for downloading Northwind database files in various formats. Created for the **CPP224 DATABASE AND SOFTWARE SECURITY** course.

## Description

This project provides an easy way for students of the CPP224 DATABASE AND SOFTWARE SECURITY course to access and download SQL Server database files for learning and practical exercises. This sample database helps demonstrate database security concepts and provides a foundation for course assignments.

The application features:

- Download options for Northwind database
- Multiple file formats (.bak and .bacpac)
- Responsive design with dark/light mode toggle
- Easy-to-use interface with tooltips showing table information

## Database Contents

### Northwind

- Customers (91 records)
- Categories (8 records)
- Employees (10 records)
- OrderDetails (518 records)
- Orders (196 records)
- Products (77 records)
- Shippers (3 records)
- Suppliers (29 records)

## Usage

1. Visit the website
2. Select your preferred format (.bak or .bacpac)
3. Download will start automatically

## Installation Guide

If you want to run this project locally:

1. Clone this repository
2. Open `index.html` in your browser
3. No server or build process required!

## File Formats

- **BAK files**: SQL Server backup files that can be restored using SQL Server Management Studio
- **BACPAC files**: Data-tier application files that can be imported into SQL Server or Azure SQL Database

## License

MIT
