const mlbTeams = [
'Angels',
'Astros',
'Athletics',
'BlueJays',
'Braves',
'Brewers',
'Cardinals',
'Cubs',
'Diamondbacks',
'Dodgers',
'Giants',
'Indians',
'Mariners',
'Marlins',
'Mets',
'Nationals',
'Orioles',
'Padres',
'Pirates',
'Phillies',
'Rangers',
'Rays',
'Reds',
'RedSox',
'Rockies',
'Royals',
'Tigers',
'Twins',
'WhiteSox',
'Yankee',
];

const nflTeams = [

'49ers',
'Bears',
'Bengals',
'Bills',
'Broncos',
'Browns',
'Buccaneers',
'Cardinals',
'Chargers',
'Chiefs',
'Colts',
'Cowboys',
'Dolphins',
'Eagles',
'Falcons',
'FootballTeam',
'Giants',
'Jaguars ',
'Jets',
'Lions',
'Packers',
'Panthers',
'Patriots',
'Raiders',
'Rams',
'Ravens',
'Saints',
'Seahawks',
'Steelers',
'Texans',
'Titans',
'Vikings'

];

const nbaTeams = [

    '76ers',
    'Bucks',
    'Bulls',
    'Cavaliers',
    'Celtics',
    'Clippers',
    'Grizzlies',
    'Hawks',
    'Heat',
    'Hornets',
    'Jazz',
    'Kings',
    'Knicks',
    'Lakers',
    'Magic',
    'Mavericks',
    'Nets',
    'Nuggets',
    'Pacers',
    'Pelicans',
    'Pistons',
    'Raptors',
    'Rockets',
    'Spurs',
    'Suns',
    'Thunder',
    'Timberwolves',
    'TrailBlazers',
    'Warriors',
    'Wizards'

];

const nhlTeams = [
'Ducks',
'Coyotes',
'Bruins',
'Sabres',
'Flames',
'Hurricanes',
'Blackhawks',
'Avalanche',
'BlueJackets',
'Stars',
'RedWings',
'Oilers',
'Panthers',
'Kings',
'Wild',
'Canadiens',
'Predators',
'Devils',
'Islanders',
'Rangers',
'Senators',
'Flyers',
'Penguins',
'Sharks',
'Kraken',
'Blues',
'Lightning',
'Leafs',
'Canucks',
'Knights',
'Capitals',
'Jets'
];



// Function to calculate length of sports team names
const sportsTeamLength = (array) => {
 
let teamSixs = 0;
let sixNames = [];

    for (team = 0; team < array.length; team++) {
    
        if (array[team].length === 6) {
            sixNames.push(array[team]);
            teamSixs++;
        }

        // if the team name is 7 letters and the last character of the team name is equal to 's'
        if (array[team].length === 7 && array[team].charAt(array[team].length - 1) === 's') {
            // need to remove the last character of the team name
            // array[team].charAt(array[team].length - 1) === '';
            
            let teamName = array[team].substring(0, array[team].length - 1);

            // then add that to the same array as the sixs 
            sixNames.push(teamName);
            teamSixs++;
        }
    
    }

// console.log(sixNames);

// console.log(`Number of teams w/ 7 letters: ${teamSevens}`);
// console.log(`Teams w/ 7 letters: ${sevenNames}`);

return sixNames;

};



// Idea to include singular team names to be able to have more teams 
// So I have all of the true 7 letter team names now
// Think best way to do this is to create a new array and add all 7 letter team names with last character as s
// And also include all 6 letter team names


const combineSports = () => {

    let allSportsArray = [];
    let mlb = sportsTeamLength(mlbTeams);
    let nfl = sportsTeamLength(nflTeams);
    let nba = sportsTeamLength(nbaTeams);
    let nhl = sportsTeamLength(nhlTeams);

    allSportsArray.push(...mlb);
    allSportsArray.push(...nfl);
    allSportsArray.push(...nba);
    allSportsArray.push(...nhl);

    console.log(allSportsArray);
}

const allSportsTeams = combineSports();












