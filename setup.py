""" theme.plone.ro customisation package
"""
from setuptools import setup, find_packages
import os
from os.path import join

NAME = 'theme.plone.ro'
PATH = ['src'] + NAME.split('.') + ['version.txt']
VERSION = open(join(*PATH)).read().strip()

setup(name=NAME,
      version=VERSION,
      description="Plone.ro customisation package",
      long_description=(
          open("README.rst").read() + "\n" +
          open(os.path.join("docs", "HISTORY.txt")).read()
      ),
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
          "Framework :: Zope2",
          "Framework :: Zope3",
          "Framework :: Plone",
          "Framework :: Plone :: 4.2",
          "Programming Language :: Zope",
          "Programming Language :: Python",
          "Topic :: Software Development :: Libraries :: Python Modules",
          "License :: OSI Approved :: GNU General Public License (GPL)",
          "License :: OSI Approved :: Mozilla Public License 1.0 (MPL)",
      ],
      keywords='theme plone.ro',
      author='David Batranu',
      author_email='david.batranu@eaudeweb.ro',
      url='http://github.com/eaudeweb/theme.plone.ro',
      license='MPL',
      packages=find_packages('src', exclude=['ez_setup']),
      package_dir={'': 'src'},
      namespace_packages=['theme', 'theme.plone'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          # -*- Extra requirements: -*-
          'plonetheme.bootstrap',
          'plonetheme.bootstrap',
      ],
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
