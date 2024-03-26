// React JS Componenti

const Selamla = () => {
  // function body
  const userName = "Anonim";

  // template: JSX - JavaScript Expressions - ifade
  /*
  Expressions: 
    Variables =>   { userName }
    Function invoke => { getUserGreeting() }
    Operator => { isAdmin && showAdminPanel() }
             => { isAdmin ? showAdminPanel() : showUserPanel() }
   */
  return <h1>Merhaba {userName}</h1>;
};

export default Selamla;
