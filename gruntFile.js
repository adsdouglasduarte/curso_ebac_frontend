const { option } = require("grunt")

module.exports = function (grunt) {
    //inicio do grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style:'compressed'
                },
                files: {
                    'main2.css': 'main2.scss'
                }
            }
        }
    })

    //tarefa de registro de tarefas 
    grunt.registerTask('olaGrunt', function () {
        const done = this.async()
        setTimeout(function () {
            console.log('Ola Grunt!')
            done()
        }, 3000)
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-sass')

    //tarefa default
    grunt.registerTask('default', ['less','sass'])
}
