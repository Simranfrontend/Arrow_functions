const greet = (name) => {
  const person = name ? name : "Guest";
  console.log("Hello, " + person);
};
greet("Simran"); 
greet();         
