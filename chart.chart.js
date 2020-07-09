new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Inbox", "Sent", "Junk", "Spam", "Trash"],
      datasets: [{
        label: "Mailbox Usage",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Mailbox Usage'
      }
    }
});
