var = raw_input("variable name: ")
heading = raw_input("piece heading: ")
title2 = raw_input("fist line of title for slideshow: ")
title3 = raw_input("2nd line of title for slideshow: ")
image = raw_input("square image relative to thedenatured.github.io: ")
image2 = raw_input("image 2 ,large image relative to thedenatured.github.io: ")
#link = raw_input("url of the piece relative to thedenatured.github.io: ")
describe = raw_input("brief description for summary boxes: ")
type = raw_input("article or video: ")
author = raw_input("creater of the piece: ")
tweet = raw_input("twitter button? y/n: ")
handle = raw_input("creator's twitter handle: ")



with open('piece_details.txt','w') as pd:
	pd.write('var %s ={\n' % (var))
	pd.write('	heading: "%s",\n' % (heading))
	pd.write('	title2: "%s",\n' % (title2))
	pd.write('	title3: "%s",\n' % (title3))
	pd.write('	image: "images/%s",\n' % (image))
	pd.write('	image2: "images/%s",\n' % (image2))
	pd.write('	link: "articles/%s.html",\n' % (var))
	pd.write('	describe: "%s",\n' % (describe))
	pd.write('	type: "%s",\n' % (type))
	pd.write('	author: "%s",\n};\n' % (author))


#var pointlessOrgans = {
#    heading: "Pointless Organs",
#    title2:"Pointless",
#    title3:"Organs",
#    image: "images/pointless.jpg",
#     image2:"images/pointless2.jpg",
#    link: "/videos/pointlessOrgans.html",
#    describe: "Evolution is a tad lazy so you've got some spare bits.",
#    type: "video",
#    author: "david"
#    };

with open('../rss.xml','r') as rss:
	rssAllLines = rss.readlines()
	
with open('../rss.xml','w') as rss:
	for x in range(0,7):
		rss.write(rssAllLines[x])
	rss.write("  <item>\n")
	rss.write("    <title>%s</title>\n" % (heading))
	rss.write("    <link>https://thedenatured.github.io/articles/%s.html</link>\n" % (var))
	rss.write("    <description>%s</description>\n" % (describe))
	rss.write("  </item>\n")
	for x in range(7,len(rssAllLines)):
		rss.write(rssAllLines[x])

with open('../summaryScript.js','r') as j:
	old_vars = j.readlines()
	
lastline = old_vars[-1][0:17] + var + ", " + old_vars[-1][17:]
#print lastline

with open("piece_details.txt","r") as pd:
	new_var = pd.read()
		
with open('../summaryScript.js','w') as j:
	j.write(new_var)
	for x in range(0,len(old_vars)-1):
		j.write(old_vars[x])
	j.write(lastline)

with open("template_article.html","r") as t:
	template = t.read()		
#template = open("template.html","r").read()


with open('article_output.html','w') as f:
	f.write(str(template[0:219]))
	f.write(str(var))
	f.write(str(template[224:1589]))
	f.write(str(var))
	f.write(str(template[1594:1693]))
	f.write(str(var))
	f.write(str(template[1698:1889]))
	f.write(str(author))
	f.write(str(template[1894:1963]))
	f.write(str(author))
	f.write(str(template[1968:2029]))
	f.write(str(author))
	if tweet == "y":
		f.write(str(template[2034:2062]))
		f.write("<br><a href='https://twitter.com/")
		f.write(str(handle))
		f.write("' class='twitter-follow-button' data-show-count='false'>Follow @")
		f.write(str(handle))
		f.write("</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>")
		f.write(str(template[2062:len(template)]))
	else:
		f.write(str(template[2034:len(template)]))

#update RSS feed

