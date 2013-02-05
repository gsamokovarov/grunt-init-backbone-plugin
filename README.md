# grunt-init-backbone-plugin

> Create a [Backbone][] plugin project template with [grunt-init][].

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone --recursive https://github.com/gsamokovarov/grunt-init-backbone-plugin.git ~/.grunt-init/backbone-plugin
```

Don't forget the `--recursive` flag! It is important for the project skeleton to include the required submodules.

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init backbone-plugin
```

It is recommended to prefix your project directory name with `backbone`. This is not enforced, but you will get a warning about it.

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

## Manifesto

The plugin project structure is based on a simple manifesto, about what a [Backbone][] plugin should and should not do:

1. Plugins should **enchance** [Backbone][], not change it.
2. It is _OK_ to monkey-patch [Backbone][] as long as **1.** stands true.

Preserving the [Backbone][] internal behaviour is pretty essential so we can play nicely with other plugins. If you need to change internal behaviour, do that in a _fork_ and not in a plugin.

To ensure that we are a _nice_ plugin, the auto-generated `test/index.html` runs the [Backbone][] own tests before the plugin ones.

## Contributing

Contribution are very welcome! If you have any ideas of how a better [Backbone][] plugin layout should look like, please share them at the Github issue tracker.

[grunt-init]: http://gruntjs.com/project-scaffolding
[Backbone]: http://backbonejs.org
