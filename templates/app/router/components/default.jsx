var React = require('react')

  , {title} = require('../metadata.json')

  , Default =

React.createClass({
  render : function () {
    return (
      <div className="default">
        <h1>{title}</h1>
        <a href="/">Router#default</a>

        <p>Advice from a Caterpillar</p>
        <p>
          The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah
          out of its mouth, and addressed her in a languid, sleepy voice.
        </p>
        <p>Who are YOU? said the Caterpillar.</p>
        <p>
          This was not an encouraging opening for a conversation. Alice replied, rather shyly, I--I hardly know, sir, just
          at present--at least I know who I WAS when I got up this morning, but I think I must have been changed several
          times since then.
        </p>
        <p>What do you mean by that? said the Caterpillar sternly. Explain yourself!</p>
        <p>I can't explain MYSELF, I'm afraid, sir said Alice, because I'm not myself, you see.</p>
        <p>I don't see, said the Caterpillar.</p>
        <p>
          I'm afraid I can't put it more clearly, Alice replied very politely, for I can't understand it myself to begin
          with; and being so many different sizes in a day is very confusing.
        </p>
        <p>It isn't, said the Caterpillar.</p>
        <p>
          Well, perhaps you haven't found it so yet, said Alice; but when you have to turn into a chrysalis--you will some
          day, you know--and then after that into a butterfly, I should think you'll feel it a little queer, won't you?
        </p>
        <p>Not a bit, said the Caterpillar.</p>
      </div>
    );
  }
});

module.exports = Default;
