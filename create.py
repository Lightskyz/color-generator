#!/usr/bin/python

import sys
import os

module_name = sys.argv[1]

# 1 - Create a SASS file for the module

sass_folder = "src/sass/includes/"
module_name_sass = "_" + module_name + ".scss"
open(sass_folder + module_name_sass, 'a').close()
print module_name_sass + " has been created in " + sass_folder + " ."

# 2 - Add the new SASS file into the all.scss

all_sass_file = open('src/sass/styles.scss', 'a')
sass_import = "@import 'includes/" + module_name + "';"
all_sass_file.write(sass_import + '\n')
print module_name_sass + " has been imported."

# 3 - Create a Pug file into the views folder

pug_folder = "src/views/includes/"
module_name_pug = module_name + ".pug"
open(pug_folder + module_name_pug, 'a').close()
print module_name_pug + " has been created in " + pug_folder + " ."