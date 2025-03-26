# Northwind Databases

A simple web application for downloading Northwind and Northwind Extended database files in various formats.

![Northwind Databases Interface](screenshot.png)

## Description

This project provides an easy way to access and download SQL Server database files for learning and development purposes. It features:

- Download options for both Northwind (basic) and Northwind Extended databases
- Multiple file formats (.bak and .bacpac)
- Responsive design with dark/light mode toggle
- Easy-to-use interface with tooltips showing table information

## Database Contents

### Northwind

- Customers (5 rows)
- OrderDetails (5 rows)
- Products (5 rows)

### Northwind Extended

- Customers (5 rows)
- OrderDetails (10 rows)
- Orders (5 rows)
- Products (9 rows)
- Suppliers (4 rows)

## Usage

1. Visit the website
2. Choose between Northwind or Northwind Extended databases
3. Select your preferred format (.bak or .bacpac)
4. Download will start automatically
5. Use the theme toggle button to switch between dark and light modes

## Installation Guide

If you want to run this project locally:

1. Clone this repository
2. Open `index.html` in your browser
3. No server or build process required!

## File Formats

- **BAK files**: SQL Server backup files that can be restored using SQL Server Management Studio
- **BACPAC files**: Data-tier application files that can be imported into SQL Server or Azure SQL Database

## Release Notes

### Version 1.0.0 (Initial Release)

- First public release
- Local database files for faster downloads
- Support for both .bak and .bacpac formats
- Dark/light theme toggle with persistence
- Tooltip information about database tables
- Responsive design for all screen sizes

## Development

This project uses:

- HTML5
- CSS3
- Vanilla JavaScript

No build tools or external dependencies required!

## License

MIT
