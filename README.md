# Nest

A way to store and categorize bits of information with a set-theory based model of organization.

All data is hypertext. Nothing more.

Each data point can be associated with multiple sets.

Retrieving data returns sequences if matches, with the first match being the closest search result, the second march being the next best search result from within the union of all sets that the first result belongs to, and so forth.

---

Example: a quote from "Cosmos" by Carl Sagan. This is how it would be created:

1. The text of the quote is the data.
- The text is added to the set "quotes"
- This triggers a series of suggested sets to satisfy the "source" requirement for the "quotes" set
- Choosing "book" as another set triggers a series of suggested sets: "author", "title", "page", "chapter"
- Filling in each value here creates (if not already exists) sets for "Carl Sagan", "Cosmos", and "p56" and adds this datum to these sets

---

## Developer Notes

A one-page app that pulls in data from internal endpoints serving JSON.

### v0.0.1

**Endpoints**  
GET /nodes => All nodes  
GET /nodes/:id => Single node  

**Schema**  
Node
- content
