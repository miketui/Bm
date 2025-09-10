#!/bin/bash

# Create mapping of Final files to original Content names
declare -A file_mapping=(
    ["Final-Conclusion.xhtml"]="28-Conclusion.xhtml"
    ["Final-QuizKey.xhtml"]="29QuizKey.xhtml"
    ["Final-SelfAssessment.xhtml"]="30-SelfAssessment.xhtml"
    ["Final-AffirmationsClose.xhtml"]="31-affirmations-close.xhtml"
    ["Final-ContinuedLearning.xhtml"]="32-continued-learning-commitment.xhtml"
    ["Final-Acknowledgments.xhtml"]="33-Acknowledgments.xhtml"
    ["Final-AboutAuthor.xhtml"]="34-AbouttheAuthor.xhtml"
    ["Final-CurlsCollective.xhtml"]="35-CurlsContempCollective.xhtml"
    ["Final-JournalingStart.xhtml"]="36-JournalingStart.xhtml"
    ["Final-ManifestingJournal.xhtml"]="37-ManifestingJournal.xhtml"
    ["Final-JournalPage.xhtml"]="38-journal-page.xhtml"
    ["Final-ProfessionalDevelopment.xhtml"]="39-professional-development.xhtml"
    ["Final-SMARTGoals.xhtml"]="40-SMARTGoals.xhtml"
    ["Final-SelfCareJournal.xhtml"]="41-self-care-journal.xhtml"
    ["Final-VisionJournal.xhtml"]="42-VisionJournal.xhtml"
    ["Final-DoodlePage.xhtml"]="43-DoodlePage.xhtml"
    ["Final-Bibliography.xhtml"]="44-bibliography.xhtml"
)

# Copy files with original names to Me folder
echo "Copying backmatter files to Me/ folder with original Content names..."

for final_file in "${!file_mapping[@]}"; do
    original_name="${file_mapping[$final_file]}"
    if [ -f "$final_file" ]; then
        cp "$final_file" "Me/$original_name"
        echo "✅ $final_file → Me/$original_name"
    else
        echo "❌ Missing: $final_file"
    fi
done

echo ""
echo "Files in Me/ folder:"
ls -la Me/
