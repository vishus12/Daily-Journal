/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>Date: ${entry.date}</p>
            <p>Concepts: ${entry.concept}</p>
            <p>Entry: ${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>
        </section>
    `
}