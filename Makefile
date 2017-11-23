# @todo Get rid of this build system in favour of the simpler NPM scripts setup.
# @todo Separate each project/demo into its own repo and package.

APP_NAME = tendrils
ARGS =

help:
	@echo "tendrils"
	@echo ""
	@echo "The following commands are available:"
	@echo ""
	@echo "\tmake setup - Installs node dependencies and requisites for build"
	@echo "\tmake watch - Triggers gulp to watch and build files"
	@echo "\tmake <TASK> - Triggers specified task, e.g. 'make build'"
	@echo ""

default: help

# This allows any of the gulp commands to be called, e.g. `make scripts`
assets build custom-deps html images jscs lint scripts server styles test watch: node_modules/.bin
	npm run gulp -- $@ $(ARGS);

# A full minified build
dist:
	make build ARGS=--is-production

# Just install node_modules, also callable as `make node_modules`
setup: node_modules/.bin

# This only runs if the modification date of `package.json` is more recent
# than the modification date of `node_modules`, `touch $@` updates the
# modification date of `node_modules` when done.
node_modules/.bin: package.json
	npm config set progress=false;
	npm cache verify;
	npm install;
	touch $@;

# Convenience: merge into `master` and push it.
# Before doing this, make sure you've got a clean `git` stage, and you're not
# running any build tasks...
# This is still an interactive command - it still requires user input.
deploy:
	$(eval BRANCH = $(shell git rev-parse --abbrev-ref HEAD))
	@echo "Switching to 'master' from '$(BRANCH)'"
	git checkout master
	git merge $(BRANCH)
	make dist
	git add -f build
	git commit
	git push
	@echo "Switching to '$(BRANCH)' from 'master'"
	git checkout $(BRANCH)

# makefile ettiquette; mark rules without on-disk targets as PHONY
.PHONY: default help setup assets build custom-deps html images jscs lint scripts server styles test watch gh-pages deploy
