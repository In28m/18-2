fetch("https://party-wedding.glitch.me/v1/party")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const guests = data.guests;
    const VIPGuests = guests.filter(guest => guest.isVIP);
    const namesOnly = guests.map(guest => guest.name);

    console.log("VIP svečiai:", VIPGuests);
    console.log("Svečiai:", namesOnly);
  })
  .catch(error => {
    console.log(error);
  });



