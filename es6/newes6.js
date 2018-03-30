

class TableView {
  constructor(props) {
    this.$ = document.getElementById(props.id);
    this.data = props.data;
    this.render();
  }
  render() {
    const person = {
      name: 'Wes',
      job: 'Web Developer',
      city: 'Hamilton',
      bio: 'Wes is a really cool guy that loves to teach web development!'
    };

    const markup = `
     <div class="person">
        <h2>
            ${person.name}
        </h2>
        <p class="location">${person.name}</p>
        <p class="bio">${person.bio}</p>
     </div>
    `;

    this.$.innerHTML = markup;

    console.log('data');
  }
}

module.exports = TableView;