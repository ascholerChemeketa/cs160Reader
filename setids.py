#!/usr/bin/python
#Script to automatically set ids for activecode, codelens, fillintheblank, and mchoice elements

import os
import re

def autoID(file_path, preview=False):

    name_parts = file_path.split(os.sep)
    folder_name = name_parts[-2]
    file_name = name_parts[-1]

    id_string = folder_name + "_" + file_name[0:-4]
    id_string = id_string.lower()

    id_counter = 1

    f = open(file_path, "r+", encoding="utf8")
    output = ""
    for line in f:
        match = re.search("(\s*.. (fillintheblank|mchoice|codelens|activecode|parsonsprob):: ).*$", line)
        if match:
            id = id_string + str(id_counter)
            id_counter = id_counter + 1
            line = match.group(1) + id + "\n"
        output += line

    if preview:
        print(output)
    else:
        f.seek(0)
        f.write(output)
        f.truncate()
    f.close()



def doAll():
    for entry in os.scandir("_sources"):
        if not entry.is_dir():
            continue

        folder = entry.name
        
        # if folder[0:3] != "CSP":
        #     continue

        print(folder)

        for file_entry in os.scandir(entry.path):
            if file_entry.name[-4:] != ".rst":
                continue
            print("  " + file_entry.path)
            autoID(file_entry.path)

        #print("---------------------")


#autoID("_sources\CSPTeasers\computeTurtles.rst")
doAll()