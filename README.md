# budget-app-rest-api
REST API for budget application 

<h2>Getting started </h2>

Run server with command
<code> node server.js </code>

The current version of the API lives at https://localhost:3000/. 

<h2>Endpoints</h2>

<h3>GET</h3>
<ul>
<li>
  <code>/notes</code> - Returns an array of all notes
</li>
<li>
  <code>/notesByMonth/:month</code> - Returns an array of notes based on month 
</li>
<li>
  <code>/offset=:offset&limit=:limit</code> - Returns an array of notes based on queries parameters offset/limit
</li>
<li>
  <code>/notes/:noteId</code> - Returns a note by Id
</li>
</ul>

<h3>POST</h3>
<ul>
<li>
  <code>/notes</code> - Post new note
</li>
</ul>


<h3>PUT</h3>
<ul>
<li>
  <code>/notes/:noteId</code> - Update note by Id
</li>
</ul>

<h3>DELETE</h3>
<ul>
<li>
  <code>/notes/:noteId</code> - Delete note by Id
</li>
</ul>
