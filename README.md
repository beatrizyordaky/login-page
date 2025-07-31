# Login Page

A responsive user registration page with real-time password validation. Uses HTML, CSS and JavaScript.

![login-page](https://github.com/user-attachments/assets/9c3f7aa9-996c-4721-92ca-467f98dba3a7)

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Real-time Password Validation**: Live feedback on password strength requirements
- **Interactive Elements**: Password visibility toggle and form validation
- **Custom Validation Messages**: Personalized error messages for form fields
- **Google Sign-up Integration**: Alternative registration option with Google

## Technologies Used

- **HTML**: Semantic markup structure
- **CSS**: Custom styling with modern features (gradients, clip-path, flexbox)
- **JavaScript**: Interactive functionality and form validation
- **Tailwind CSS**: Utility-first CSS framework (included via CDN)
- **Google Fonts**: Inter font family for clean typography

## File Structure

```
login-page/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Custom CSS styles
├── js/
│   └── script.js           # JavaScript functionality
├── LICENSE                 # Project license
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd login-page
   ```

2. **Run the project**:
   ```bash
   python -m http.server
   ```
   Open your web browser and go to the address: http://localhost:8000

## Password Validation Rules

The form includes real-time validation for the following password requirements:

- Minimum 8 characters
- At least one uppercase letter (A-Z)
- At least one lowercase letter (a-z)
- At least one number (0-9)
- At least one special character (!@#$%^&*)

Visual indicators show green checkmarks for met requirements and gray crosses for unmet ones.

## Form Validation

### Email Field
- **Required validation**: "Please enter your email address to continue"
- **Format validation**: "Please enter a valid email address"

### Password Field
- Real-time validation feedback
- Visual progress indicators
- Custom error messages

## Styling Approach

### Design System
- **Primary Colors**: Purple gradient (#6a00f4, #9b5de5, #f15bb5)
- **Background**: Light gray (#f9fafb)
- **Typography**: Inter font family
- **Spacing**: Consistent rem-based spacing system

### Responsive Features
- Mobile-first approach
- Flexible grid system
- Scalable typography
- Touch-friendly interactive elements

### Validation Messages
Update custom messages in `js/script.js`:

```javascript
this.setCustomValidity("Your custom message here");
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

## License

This project is licensed under the terms specified in the LICENSE file.
