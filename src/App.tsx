import React from 'react';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  school: string;
  name: string;
  state: string;
  city: string;
}

function Header() {
  return (
    <div className="Header">
      <h1>
        This website displays a list of college basketball teams and their
        details.
      </h1>
    </div>
  );
}

class TeamItem extends React.Component<{ team: TeamProps }> {
  render() {
    const { team } = this.props;
    return (
      <div className="team-item-box">
        <h3>School:</h3>
        <h2>{team.school}</h2>

        <h3>Mascot:</h3>
        <h2>{team.name}</h2>

        <h3>Location:</h3>
        <h2>
          {team.state}, {team.city}
        </h2>
      </div>
    );
  }
}

function List() {
  return (
    <div>
      {CollegeBasketballTeams.teams.map((team) => (
        <TeamItem key={team.tid} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
