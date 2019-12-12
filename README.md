# gamenite


User Stories

Gamenite is an app that helps users smoothly organize tabletop gaming meetups. 

Users can build networks of gaming friends, organize their game libraries, and find local tabletop events, and host their own game nights.

We use the Boardgames Atlas API to build user libraries and plan the perfect game night.


Data Models


Users
id: string
name:	{
	first: string
	last: string
	display: string (unique, required)
	}
email: string (unique, required)
password: string (required)
avatar: image
location: string
phone: string
dob: string
bio: string
library: [ 
	game: {
		id: string
		name: string
		thumb: string
		numOfPlayers: string
		timeToPlay: string
		playThroughs: number
		fav: boolean
		}
	]
friends: [
	user: { id }
	accepted: boolean
	]
friendRequests [ { user: id } ]
events: [ event: { id } ]
Events
public: boolean
name: string (required)
location: string (required)
description: string
startTime: string
endTime: string
guests: [
	user: {
		user: { id }
		cohost: boolean
		attending: boolean
		}
	]
games: [
	game: { id }
	interestedPlayers: [
		user: { id }
		]
	]


comments: [
	user: { id }
	comment: string
	replies: [ 
		user: { id }
		reply: string 
		]
	]


The Users’ game library needs to store the id, name, and thumbnail from the API to display the basics, then link to the API for all other info.

The Events model will pull number of players and playtime from the API. Eventually adding game mechanics and description as well.

The Users model will eventually be expanded to add a boolean for Game Stores and other event spaces that host public game meetups. Comments will be added to the Events model as the first stretch goal.API

The Board Game Atlas API is split into several components. 

Search
Used to search for games. 


Returns:
name
min_players
max_players
min_playtime
max_playtime
min_age
description
description_preview


categories [*id]
/api/game/categories

mechanics [*id]
api/game/mechanics



	

Technologies

Mongo/MongoDB, Mongoose, Express, React, Node, Firebase, CSS
