const elements = {
    //CSS Selectors because well.... I only feel like use CSS right still and stills

    postButton: {selector: '#makePost'},
    postTextarea: {selector: '#postTextContent'}
}

const commands = {
    makeAQuickPost() {
        return this
        .waitThenEnterValue('@postTextarea','This was posted with nightwatch','New Post has been enter in the textarea')
        .waitThenClick('@postButton','Post has been submitted')
    }

}
export default {
    elements: elements,
    commands: [commands],
    url: `https://www.phptest-mikshaw.c9users.io/profile.php`
  }