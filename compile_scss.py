import subprocess
import os
import sys

try:
    import sass
    print("Using libsass...")
    
    # Compile SCSS to CSS with correct include path
    css_output = sass.compile(
        filename='assets/sass/main.scss',
        include_paths=['assets/sass'],
        output_style='expanded'
    )
    
    with open('assets/css/main.css', 'w') as f:
        f.write(css_output)
    
    print("✅ SCSS compiled successfully!")
    print("📁 Updated: assets/css/main.css")
    
except ImportError:
    print("❌ libsass not available. Try installing it with:")
    print("pip install libsass")
    print("\nAlternatively, you can:")
    print("1. Install Sass: npm install -g sass")
    print("2. Run: sass assets/sass/main.scss assets/css/main.css")
    print("3. Or visit the website to see changes without compiled CSS (some styling may be missing)")
except Exception as e:
    print(f"❌ Error compiling SCSS: {e}")
    print("\nTry alternative method:")
    print("1. Install Sass: npm install -g sass")  
    print("2. Run: sass assets/sass/main.scss assets/css/main.css")