!SLIDE
# Cross-platform localisation

## Jan Berkel, SoundCloud

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## @jberkel

!SLIDE

# a bit of context

<img class="big" src="hello/iphone_you.jpg"/>
<img class="big" src="hello/android_you.jpg"/>

!SLIDE

# m.soundcloud.com

<iframe
class="zoomed" src="http://m.soundcloud.com"></iframe>

!SLIDE

# before you localise...

!SLIDE

# you need:
## consistent wording, cross-platform.

!SLIDE

# changing the wording of the app(s)
### typical email from marketing/product mgmt/...:

<blockquote>
<p> can you just change this word to something else? </p>
</blockquote>

!SLIDE

# we tried github's editor

<img src="hello/github_editor.png" />

!SLIDE

# existing tools aren't that great

<iframe
class="zoomed" src="http://crowdin.net"></iframe>

!SLIDE

# tools #2

<iframe
class="zoomed" src="https://www.transifex.net/start/"></iframe>

!SLIDE

# so everybody is reinventing the wheel

!SLIDE

# we are doing it, too.
## codename: lolcatlizr

!SLIDE

# requirements

!SLIDE

# central storage

  * Database ?
  * SCM ?
  * Google Docs ?

!SLIDE

# a canonical format

!SLIDE

# Android
### res/value/strings.xml

    <resources>
      <string name="selected">You selected: $1%s</string>
      <plurals name="beers">
        <item quantity="one">Buy one bottle of beer</item>
        <item quantity="other">Buy %d bottles of beer</item>
      </plurals>
    </resources>

!SLIDE

# iOS
### Resources/en.lproj/Localizable.strings

    "selected" = "You selected: $1%@";
    "beers_one" = "Buy one bottle of beer";
    "beers_other" = "Buy %d bottles of beer";

!SLIDE

# Android+iOS import/export

!SLIDE

# nice to haves


  * history
  * provide translation context
  * later: integration with Git(hub)
  * integration with translation services

!SLIDE

# Automate translation

<iframe
src="http://mygengo.com/api/developer-docs/methods/translate-job-post/"></iframe>

!SLIDE

# demo

!SLIDE

# start early!

!SLIDE

### have consistent / namespaced keys

#### Android

    <string name="dashboard_ticker_title">New new message</string>
    <string name="dashboard_ticker_message">You have a new message</string>

#### iOS

    "dashboard_ticker_title" = "New message";
    "dashboard_ticker_message" = "You have a new message";

!SLIDE

# l10n/i18n: it's hard

<a href="http://bit.ly/localehorror">http://bit.ly/localehorror</a>
<iframe
class="zoomed" src="http://search.cpan.org/dist/Locale-Maketext/lib/Locale/Maketext/TPJ13.pod#A_Localization_Horror_Story:_It_Could_Happen_To_You"></iframe>

!SLIDE

# it's hard #2

<iframe
class="zoomed" src="http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html"></iframe>

!SLIDE

# questions?
