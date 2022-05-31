# Pagination_and_Email

<ul>
<li>Create a users collection and it should have
<ul>
<li>first_name</li>
<li>last_name</li>
<li>email</li>
</ul>
</li>
<li>create endpoint for registering where in the user can register and when he registers we should send him a confirmation email and the contents of that will be
<ul>
<li>to :- {user.email}</li>
<li>subject :- Welcome to ABC system {user.first_name} {user.last_name}</li>
<li>text :- Hi {first_name}, Please confirm your email address</li>
</ul>
</li>
<li>create a set of admins ( 5 admin users)
<ul>
<li>when a user registers all the admins should receive an email stating</li>
<li>subject :- {user.first_name} {user.last_name} has registered with us</li>
<li>text :- Please welcome {user.first_name} {user.last_name}</li>
</ul>
</li>
<li>An endpoint to get the paginated users should be available</li>
</ul>
