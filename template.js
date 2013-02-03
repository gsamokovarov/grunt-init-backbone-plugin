module.exports = {
  description: 'Create a backbone plugin template with grunt-init.',
  notes: 'Create backbone plugin project templates with ease.',

  warnOn: '*',

  template: function(grunt, init, done) {
    init.process({type: 'grunt'}, [
      init.prompt('name', function(value, props, done) {
        if (!/^backbone/.test(value)) {
          var message = 'It is recommended to prefix the project name with "backbone".';
          grunt.log.writelns(message.yellow);
        }
        done(null, value);
      }),
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
    ], function(error, properties) {
      grunt.util._.extend(properties, {
        short_name: properties.name.replace(/^backbone[\-_\.]?/, ''),
        main: 'Gruntfile.js',
        npm_test: 'grunt test',
        keywords: ['backbone', 'plugin'],
        devDependencies: {
          'grunt-contrib-qunit': '0.1.1rc6',
          'grunt': '0.4.0rc7'
        }
      });

      var files = init.filesToCopy(properties);

      init.addLicenseFiles(files, properties.licenses);
      init.copyAndProcess(files, properties);
      init.writePackageJSON('package.json', properties);

      done();
    });
  }
};
