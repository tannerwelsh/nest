module.exports = function(grunt) {
  grunt.initConfig({
    pg: {
      createdb: "CREATE DATABASE"
    }
  });

  grunt.registerMultiTask('pg', 'Postgres commands.', function(name) {
    grunt.log.writeln('Executing SQL: `' + this.data + ' ' + name + ';`');
  });
}
