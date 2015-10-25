+-------------------+-------------------+
| nonEnglishNames   | R Documentation   |
+-------------------+-------------------+

Names with Character Set Problems
---------------------------------

Description
~~~~~~~~~~~

A ``data.frame`` describing names containing character codes rare or
non-existent in standard English text, e.g., with various accent marks
that may not be coded consistenty in different locales or by different
software.

Usage
~~~~~

::

    data(nonEnglishNames)

Format
~~~~~~

A ``data.frame`` with two columns:

nonEnglish
    a character vector containing names that often have non-standard
    characters with the non-standard characters replaced by "\_"

English
    a character vector containing a standard English-character
    translation of ``nonEnglish``

See Also
~~~~~~~~

``grepNonStandardCharacters``, ``subNonStandardCharacters``

Examples
~~~~~~~~

::

    data(nonEnglishNames)


    all.equal(dim(nonEnglishNames), c(17, 2))


