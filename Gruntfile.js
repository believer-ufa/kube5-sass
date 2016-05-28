module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dev: {
                files: [
                    { 'dist/kube.css' : 'src/kube.scss' }
                ],
                options: {
                    sourceMap : false,
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);
};