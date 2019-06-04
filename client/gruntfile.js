var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function (grunt) {
    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var LIVERELOAD_PORT = 35729;

    var connectConfig = {
        serverOptions: {
            hostname: 'localhost',
            port: 8003,
            open: true,
            middleware: function(connect) {
                return [proxy];
            }
        },
        clientProxy: {
            // ng-scp static js and html files
            context: '/client',
            host: 'localhost',
            port: 8004
        }
    };
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        artifactFiles: [
            'dist/*',
            'src/ng1/**/*.html'
        ],
        connect: {
           static: {
               options: {
                   hostname: 'localhost',
                   port: 8004,
                   base: '..',
                   livereload: LIVERELOAD_PORT
               }
           },
           local: {
               options: connectConfig.serverOptions,
               proxies: [
                   connectConfig.clientProxy,
                   {
                       // delegate all other request to local Play server
                       context: '/',
                       host: 'localhost',
                       port: 9000
                   }
               ]
           }
       },
        clean: {
            dist: ['dist/*']
        },
        watch: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            root: {
                files: ['src/ng1/root/**/*.js', 'src/ng1/app.module.js', 'src/ng1/root/**/*.html'],
                tasks: ['compile']
            },
            recipes: {
                files: ['src/ng1/recipes/**/*.js', 'src/ng1/recipes/**/*.html'],
                tasks: ['compile']
            },
            auth: {
                files: ['src/ng1/auth/**/*.js', 'src/ng1/auth/**/*.html'],
                tasks: ['compile']
            }
        },
        htmlcompressor: {
            compile: {
                options: {
                    type: 'html'
                },
                files: [{
                    expand: true,
                    src: ['src/ng1/**/*.html']
                }]
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
                sourceMap: true,
                remove: true
            },
            root: {
                files: [{
                    expand: true,
                    src: ['src/ng1/root/**/*.js']
                }]
            },
            recipes: {
                files: [{
                    expand: true,
                    src: ['src/ng1/recipes/**/*.js']
                }]
            },
            auth: {
                files: [{
                    expand: true,
                    src: ['src/ng1/auth/**/*.js']
                }]
            }
        },
        browserify: {
            root: {
                files: {
                    'dist/root.min.js': ['src/ng1/root/root.module.js', 'src/ng1/app.module.js']
                },
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }], "browserify-ngannotate", "uglifyify"]
                }
            },
            recipes: {
                files: {
                    'dist/recipes.min.js': ['src/ng1/recipes/recipes.module.js']
                },
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }], "browserify-ngannotate", "uglifyify"]
                }
            },
            auth: {
                files: {
                    'dist/auth.min.js': ['src/ng1/auth/auth.module.js']
                },
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }], "browserify-ngannotate", "uglifyify"]
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                screwIE8: true
            },
            libs: {
                options: {
                    sourceMap: false
                },
                files: {
                    'dist/lib.min.js': [
                        'src/ng1/libs/jquery/dist/jquery.min.js',
                        'src/ng1/libs/angular/angular.min.js',
                        'src/ng1/libs/firebase/firebase.js',
                        'src/ng1/libs/angularfire/dist/angularfire.min.js'
                    ]
                }
            },
            templates: {
                files: {
                    'dist/templates.min.js': ['dist/**.templates.js']
                }
            }
        },
        ngtemplates: {
            root: {
                src: 'src/ng1/root/**/*.html',
                dest: 'dist/root.templates.js',
                options: {
                    url: function (url) {
                        return 'client/src/ng1/' + url;
                    }
                }
            },
            recipes: {
                src: 'src/ng1/recipes/**/*.html',
                dest: 'dist/recipes.templates.js',
                options: {
                    url: function (url) {
                        return 'client/src/ng1/' + url;
                    }
                }
            },
            auth: {
                src: 'src/ng1/auth/**/*.html',
                dest: 'dist/auth.templates.js',
                options: {
                    url: function (url) {
                        return 'client/src/ng1/' + url;
                    }
                }
            }
        }
    });

    grunt.registerTask('bundleHtml', function(){
        grunt.task.run('ngtemplates');

    });

    grunt.registerTask('compile', function() {
        grunt.task.run('ngtemplates');
        // grunt.task.run('ngAnnotate');
        grunt.task.run('browserify');
        grunt.task.run('uglify');
    });

    // grunt.registerTask('default', ['clean:dist', 'runLocal']);
    grunt.registerTask('default', ['runLocal']);

    grunt.registerTask('runLocal', function() {
        // this.requires('clean:dist');

        grunt.task.run('compile');
        grunt.task.run('connect:static');

        grunt.task.run([
            'configureProxies:local',
            'connect:local',
            'watch'
        ]);
    });
};