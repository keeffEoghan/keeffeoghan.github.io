APP_NAME = gerry-okeeffe-gardens
runner = npm run gulp

help:
	@echo "gerry-okeeffe-gardens"
	@echo ""
	@echo "The following commands are available:"
	@echo ""
	@echo "\tmake setup - Installs node dependencies and requisites for build"
	@echo "\tmake <TASK> - Triggers specified task (build/watch/images/lint/scripts/styles), e.g. 'make build'"
	@echo ""

default: help

# this allows any of the gulp commands to be called, e.g. `make scripts`
build watch images lint scripts styles custom-deps assets js-style: node_modules
	$(runner) $@;

# just install node_modules, also callable as `make node_modules`
setup: node_modules

# backwards compatibility
fe-setup: build

# this only runs if the modification date of `package.json` is more recent
# than the modification date of `node_modules`, `touch $@` updates the
# modification date of `node_modules` when done.
node_modules: package.json
	npm cache clean;
	npm install;
	touch $@


# makefile ettiquette; mark rules without on-disk targets as PHONY
.PHONY: default help setup fe-setup
.PHONY: build watch lint images scripts styles
