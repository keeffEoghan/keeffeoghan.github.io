APP_NAME = tendrils
ARGS = 
runner = npm run gulp

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

# this allows any of the gulp commands to be called, e.g. `make scripts`
assets build custom-deps html images jscs lint scripts server styles test watch: node_modules/.bin
	npm run gulp -- $@ $(ARGS);

# a full minified build
dist:
	make build ARGS=--is-production

# just install node_modules, also callable as `make node_modules`
setup: node_modules/.bin

# this only runs if the modification date of `package.json` is more recent
# than the modification date of `node_modules`, `touch $@` updates the
# modification date of `node_modules` when done.
node_modules/.bin: package.json
	npm config set progress=false;
	npm cache clean;
	npm install;
	touch $@;

# makefile ettiquette; mark rules without on-disk targets as PHONY
.PHONY: default help setup assets build custom-deps html images jscs lint scripts server styles test watch
