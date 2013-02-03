module.exports = {
  description: 'Create a backbone plugin template with grunt-init.',
  notes: 'Create backbone plugin project templates with ease.',

  warnOn: '*',

  template: function(grunt, init, done) {
    init.process({type: 'grunt'}, [
      init.prompt('name'),
      init.prompt('description'),
      init.prompt('version'),
      init.prompt('repository'),
      init.prompt('homepage'),
      init.prompt('bugs'),
      init.prompt('licenses'),
      init.prompt('author_name'),
      init.prompt('author_email'),
      init.prompt('author_url'),
      init.prompt('grunt_version'),
      init.prompt('node_version', grunt['package'].engines.node)
    ], function(err, props) {
      // Set a few grunt-plugin-specific properties.
      props.main = 'Gruntfile.js';
      props.npm_test = 'grunt test';
      props.keywords = ['backbone', 'plugin'];
      props.devDependencies = {
        'grunt': '0.4.0rc7'
      };

      var files = init.filesToCopy(props);

      init.addLicenseFiles(files, props.licenses);
      init.copyAndProcess(files, props);
      init.writePackageJSON('package.json', props);

      done();
    });
  }
};
