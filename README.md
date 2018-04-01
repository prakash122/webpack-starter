# Configuring Webpack 4

We shall configure webpack 4 to build all our front end projects. We do get sample webpack configurationsin a lot of boilerplates. But, this is mainly for organizing and understanding webpack. 

#### Input and Output

    // Paths involved in the creating the config
    const PATHS = {
        src: path.resolve(__dirname, 'app/index.js'),
        dest: path.resolve(__dirname, 'build')
    }

    // Webpack config object
    const config = {};

    // Entry point of the application to be compiled
    config.entry = PATHS.src;

    // Output of the application build
    config.output = {
        path: PATHS.dest,
        filename: 'output.bundle.js'
    }
    
#### Loaders

#### Plugins