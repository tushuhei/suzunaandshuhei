# coding: utf-8
from subprocess import call
import os

dirpath = os.path.dirname(os.path.realpath(__file__))

with open(os.path.join(dirpath, 'views', 'index.html')) as f:
    characters = f.read()
characters = u''.join(set(characters.decode('utf-8')))
with open(os.path.join(dirpath, 'glyphs.txt'), 'w') as f:
    f.write(characters.encode('utf-8'))

def get_command(weight, fmt):
    command = [
            'pyftsubset',
            os.path.join(
                dirpath, 'NotoSerifCJKjp-hinted',
                'NotoSerifCJKjp-%s.otf' % (weight)),
            '--text-file=%s' % (os.path.join(dirpath, 'glyphs.txt')),
            '--layout-features="palt","vert"',
            '--desubroutinize',
            '--output-file=%s' % (os.path.join(
                dirpath, 'source', 'fonts',
                'NotoSerifCJKjp-%s.%s' % (weight, fmt))),
            ]
    if fmt in {'woff', 'woff2'}:
        command.append('--flavor=%s' % (fmt))
    print(command)
    return command

for weight in {'ExtraLight', 'Regular', 'Bold'}:
    for fmt in {'otf', 'woff', 'woff2'}:
        call(get_command(weight, fmt))
