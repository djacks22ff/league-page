/*   STEP 1   */
export const leagueID = "1001684430240423936"; // your league ID
export const leagueName = "The Highlander League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>The Highlander Leage: There can be only one</p>
  <p>Once upon a time in the mystical land of Statesboro, there existed a fellowship bound not by the common quest for silver or gold, but by the love of a different kind of precious - the pigskin. In the year 2007, four brave souls, Stone, JB, TJ, and Travis, united under the leadership of JB to form the foundation of what would become a legendary fantasy football league.</p>
  <p>In those early days, the fellowship faced trials and tribulations in the world of fantasy sports. Battles were fought on digital fields, and victories were celebrated with the fervor of conquering heroes. However, in the year 2009, Stone, one of the original warriors, departed the fellowship, leaving a void that needed to be filled.</p>
  <p>Undeterred, the remaining members - JB, TJ, and Travis - sought to expand their league, calling upon new warriors to join their ranks. Dottie, JC, Brandon, Yuta, and Toby answered the call, swelling their numbers to eight. The fellowship grew stronger, and in 2011, they added Ringo, D-Rock, Zack, and Spanky to their ranks. JC, a wise and capable tactician, ascended to the role of leader, guiding the league through uncharted territories.</p>
  <p>In the midst of their journey, Toby strayed from the path by neglecting to pay his dues in 2012. To maintain the purity of the fellowship, Toby was cast out, and in his place, Joe emerged as a new ally. </p>
  <p>During this time a fateful meeting in Dunwoody,JB and JC pondered upon a fitting name for the fellowship. As fate would have it, the duo stumbled upon a production whose legendary tale was as grandiouse as their sacred league.Inspired by the immortal warriors they saw, they agreed that the league would forever be known as the Highlander League. With the naming came the acquisition of a majestic trophy for the victor, and an unfortunate relic for the lowest among them - the dreaded Eisencock.</p>
  <p>JB resumed leadership in 2016, guiding the league through the ebb and flow of fantasy football fortunes. In 2017, Yuta, facing the burdens of mandatory travel for an in-person draft, took leave from the fellowship. His stead was taken by the valiant Nic, and the league pressed on.</p>
  <p>In 2018, a new era dawned as Spanky ascended to the leadership, steering the Highlander League through uncharted territories. But the winds of change blew again in 2019 when TJ, proving to be an unwelcome presence, was excommunicated from the league. Yuta, like the prodigal son, returned to fill the void left by TJ.</p>
  <p>As the years rolled on, the fellowship adapted and evolved. In the year 2023, the Highlander League embraced a new era by transitioning from the familiar grounds of ESPN to the uncharted territories of Sleeper. Spanky, the wise and battle-tested leader, continues to guide the league through the ever-changing landscape of fantasy football, ensuring that the legacy of the Highlander lives on.</p>
  <p>And so, the tale of the Highlander League unfolds, with each season adding a new chapter to its storied history.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "851140012182482944",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Derrick Jackson",
      "location": "Canton", // (optional)
      "bio": "I am he",
      "photo": "/managers/derrick.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ryan Spangler", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/ryan.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "722318253640196096",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Ryan Spangler",
      "location": "Augusta", // (optional)
      "bio": "Ryan is commissioner",
      "photo": "/managers/ryan.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Derrick Jackson", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/derrick.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
