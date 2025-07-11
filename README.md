# AMC Website - File Management Guide

## Most Convenient Ways to Add Files

### 1. **File Upload Interface (Recommended)**
- Navigate to `file-upload.html` in your browser
- Use the web-based upload form to add files with metadata
- Files are automatically categorized and organized
- Includes preview and management features

### 2. **Direct File System Organization**
Create the following directory structure for manual file organization:

```
AMC Website/
├── files/
│   ├── amc8/
│   │   ├── algebra/
│   │   ├── geometry/
│   │   ├── number-theory/
│   │   └── combinatorics/
│   ├── amc10/
│   │   ├── algebra/
│   │   ├── geometry/
│   │   ├── number-theory/
│   │   └── combinatorics/
│   ├── formula-sheets/
│   └── strategies/
├── images/
│   ├── logos/
│   ├── diagrams/
│   └── icons/
└── documents/
    ├── handouts/
    ├── solutions/
    └── guides/
```

### 3. **Quick File Addition Methods**

#### Method A: Drag & Drop
1. Open `file-upload.html` in your browser
2. Drag files directly onto the upload area
3. Fill in the metadata form
4. Submit to add to the website

#### Method B: Direct Link Updates
1. Place files in the appropriate directory
2. Update the download links in the HTML files:
   ```html
   <a href="files/amc8/algebra/linear-equations.pdf" class="btn btn-primary">Download Handouts</a>
   ```

#### Method C: Batch Upload
1. Use the file upload interface
2. Select multiple files at once
3. Categorize them appropriately
4. Upload in batches

### 4. **Supported File Types**
- **PDF** - Best for handouts and documents
- **DOC/DOCX** - Word documents
- **TXT** - Plain text files
- **JPG/PNG** - Images and diagrams
- **ZIP** - Compressed files (for multiple documents)

### 5. **File Naming Conventions**
Use descriptive, consistent naming:
- `amc8-algebra-linear-equations.pdf`
- `amc10-geometry-circles-handout.pdf`
- `formula-sheet-amc8.pdf`
- `problem-solving-strategies.pdf`

### 6. **Metadata Requirements**
For each file, include:
- **Title**: Descriptive name
- **Category**: AMC 8/10 + subject area
- **Description**: Brief summary of content
- **File size**: For user reference

### 7. **Quick Start Guide**

1. **For PDF Handouts:**
   - Save as PDF with descriptive filename
   - Upload via `file-upload.html`
   - Categorize appropriately
   - Add description

2. **For Images/Diagrams:**
   - Optimize for web (compress if needed)
   - Place in `images/` directory
   - Update HTML to reference new images

3. **For Multiple Files:**
   - Create ZIP archive
   - Upload as single file
   - Or upload individually for better organization

### 8. **File Management Features**
- **Filtering**: View files by category
- **Search**: Find specific files quickly
- **Preview**: View files before downloading
- **Delete**: Remove outdated files
- **Organize**: Automatic categorization

### 9. **Best Practices**
- Keep file sizes under 10MB for web compatibility
- Use descriptive titles and descriptions
- Organize files logically by topic
- Regular cleanup of outdated materials
- Backup important files

### 10. **Troubleshooting**
- **Upload fails**: Check file size and format
- **Files not showing**: Verify categorization
- **Broken links**: Update file paths in HTML
- **Slow loading**: Compress large files

## Quick Commands

To create the directory structure:
```bash
mkdir -p files/{amc8,amc10}/{algebra,geometry,number-theory,combinatorics}
mkdir -p files/{formula-sheets,strategies}
mkdir -p images/{logos,diagrams,icons}
mkdir -p documents/{handouts,solutions,guides}
```

The file upload interface at `file-upload.html` is the most convenient method for regular file additions, while the directory structure provides a clean organization for manual file management. 