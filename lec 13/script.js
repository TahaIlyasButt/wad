var db = {
	username: "ali",
	password: "123"
};

var newsfeed = [
{
	user: "Abdullah",
	status: "	Says: I'm feeling lonely, join me"
},

{
	user: "Mark Zuckerberg",
	status: "	Says: Welcome to Facebook!"
},

{
	user: "Muhammad ALi",
	status: "	Says: Float like a butterfly, sting like a bee!"
}];

var u = prompt("Enter username");
while(u != "ali")
{u = prompt("User doesn't exist!");}

	var p = prompt("Enter password");
	while(p!=123)
		p = prompt("Incorrect password. Try again!");
	if(p = "123") {
        console.log(newsfeed[0].user);
        console.log(newsfeed[0].status);
        console.log(newsfeed[1].user);
        console.log(newsfeed[1].status);
        console.log(newsfeed[2].user);
        console.log(newsfeed[2].status);
    }