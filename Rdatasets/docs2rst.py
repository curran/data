"""
Converts the HTML docs to human-readable rST and places them in a rst folder
in the doc/package folders.

Depends on pandoc being installed. Pandoc is available in repositories.
"""

import subprocess
import os

# directory names to skip
blacklisted = [".git", "license", "csv" ]

def html2rst(html):
    p = subprocess.Popen(['pandoc', '--from=html', '--to=rst'],
                         stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    return p.communicate(html)[0]

for root, dirnames, filenames in os.walk("./doc"):
    for dir_name in dirnames:
        if dir_name == "rst": # stay high level
            continue
        dest_dir = os.path.join(root, dir_name, "rst")
        if not os.path.exists(dest_dir):
            os.makedirs(dest_dir)
        html_files = os.listdir(os.path.join(root, dir_name))

        for f in html_files:
            if f == 'rst':
                continue
            fin = os.path.join(root, dir_name, f)
            fout = os.path.join(dest_dir, f.replace('html', 'rst'))
            rst = html2rst(open(fin, 'r').read())
            fout = open(fout, 'w')
            fout.write(rst)
            fout.close()
