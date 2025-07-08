# Resume Generation Feature

## Overview
This feature allows users to generate and download a beautiful PDF resume dynamically using the current experience data from the portfolio.

## Features
- **Dynamic PDF Generation**: Creates a professional resume PDF using current data
- **Beautiful Design**: Modern, clean layout with professional styling
- **Real-time Loading**: Shows loading states and toast notifications
- **Responsive Layout**: Optimized for A4 format with proper scaling
- **Multi-page Support**: Handles long resumes with automatic page breaks
- **Error Handling**: Comprehensive error handling with user feedback

## Components

### 1. Resume Generator Utility (`/src/utils/resumeGenerator.js`)
- Uses `html2canvas` to convert HTML to canvas
- Uses `jsPDF` to create PDF from canvas
- Generates clean, professional HTML resume template
- Handles multi-page PDFs automatically

### 2. Updated Hero Component (`/src/components/Hero.jsx`)
- Added PDF generation button with loading state
- Toast notifications for user feedback
- Error handling for failed generation attempts

### 3. Updated Header Component (`/src/components/Header.jsx`)
- Resume download button in both desktop and mobile navigation
- Consistent loading states and error handling

### 4. Toast Notifications (`react-hot-toast`)
- Loading state: "Generating your resume PDF..."
- Success state: "Resume PDF generated and downloaded successfully!"
- Error state: "Failed to generate resume PDF. Please try again."

## Data Sources
The resume pulls data from:
- `personalInfo`: Contact information, name, role, tagline
- `aboutMe`: Professional summary and highlights
- `experience`: Work experience with achievements
- `education`: Educational background
- `techStack`: Technical skills with proficiency levels
- `certifications`: Current and planned certifications
- `projects`: Featured projects (top 3)

## Resume Sections
1. **Header**: Name, role, contact info, social links
2. **Professional Summary**: Overview and key highlights
3. **Professional Experience**: Work history with achievements
4. **Education**: Academic background
5. **Technical Skills**: Organized by category with skill levels
6. **Certifications**: Current and planned certifications
7. **Featured Projects**: Top 3 projects with details

## Styling
- **Colors**: Professional blue (#2563eb) and gray color scheme
- **Typography**: Clean Arial font with proper hierarchy
- **Layout**: Grid-based responsive design
- **Visual Elements**: Progress bars for skills, status badges
- **Spacing**: Consistent padding and margins

## Usage
1. Click "Download Resume" button in Hero section or Header
2. PDF generation process starts with loading indicator
3. Toast notification shows progress
4. PDF automatically downloads with filename: `{Name}_Resume.pdf`

## Technical Implementation
- **HTML Template**: Dynamically generated HTML with inline styles
- **Canvas Rendering**: High-quality rendering at 2x scale
- **PDF Creation**: A4 format with proper dimensions
- **Error Handling**: Comprehensive try-catch blocks
- **Memory Management**: Temporary DOM elements are cleaned up

## Future Enhancements
- [ ] Multiple resume templates
- [ ] Customizable sections
- [ ] Save/load resume configurations
- [ ] Export to different formats (Word, etc.)
- [ ] Resume analytics and optimization tips
