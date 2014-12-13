Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {
      if (error)
        return alert(err.reason);

      if (result.postExists)
        alert('This link has alerady been posted');
    });

    Router.go('postsList');

  }
});
