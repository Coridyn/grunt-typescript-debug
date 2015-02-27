module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    
    grunt.initConfig({
        typescript: {
            dev: {
                src: [
                    'src/**/*.ts'
                ],
                dest: 'dist',
                options: {
                    basePath: 'src',
                    watch: true
                }
            },
        }
    });
    
    grunt.registerTask('default', ['typescript:dev']);
};
