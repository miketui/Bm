#!/bin/bash

convert_file() {
    local tsx_file="$1"
    local base_name=$(basename "$tsx_file" .tsx)
    local xhtml_file="${base_name}.xhtml"
    local title=$(echo "$base_name" | sed 's/Final-//' | sed 's/\([A-Z]\)/ \1/g' | sed 's/^ //')
    
    echo "Converting $tsx_file to $xhtml_file"
    
    # Extract content between return ( and ); at the end
    sed -n '/return (/,/^  );$/p' "$tsx_file" | \
    sed '1d; $d' | \
    sed 's/className=/class=/g' | \
    sed 's/{\/\* \(.*\) \*\/}/<!-- \1 -->/g' | \
    sed 's/className=/class=/g' | \
    sed '/^      <link rel="stylesheet"/d' | \
    sed '/^    <>/d' | \
    sed '/^    <\/>/d' > temp_content.html
    
    # Create full XHTML file
    cat > "$xhtml_file" << XHTML_EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <title>$title - Curls &amp; Contemplation</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" href="styles/style.css" type="text/css" />
  <link rel="stylesheet" href="styles/fonts.css" type="text/css" />
  <link rel="stylesheet" href="styles/print.css" type="text/css" media="print" />
</head>
<body>
XHTML_EOF
    
    cat temp_content.html >> "$xhtml_file"
    echo "</body>" >> "$xhtml_file"
    echo "</html>" >> "$xhtml_file"
    
    rm temp_content.html
}

# Convert missing files
for file in Final-Acknowledgments.tsx Final-AffirmationsClose.tsx Final-DoodlePage.tsx Final-JournalPage.tsx Final-ProfessionalDevelopment.tsx Final-SelfCareJournal.tsx Final-VisionJournal.tsx; do
    if [ -f "$file" ]; then
        convert_file "$file"
    fi
done
