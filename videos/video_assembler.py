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
video = raw_input("youtube embed iframe:")


with open('piece_details.txt','w') as pd:
	pd.write('var %s ={\n' % (var))
	pd.write('	heading: "%s",\n' % (heading))
	pd.write('	title2: "%s",\n' % (title2))
	pd.write('	title3: "%s",\n' % (title3))
	pd.write('	image: "images/%s",\n' % (image))
	pd.write('	image2: "images/%s",\n' % (image2))
	pd.write('	link: "videos/%s.html",\n' % (var))
	pd.write('	describe: "%s",\n' % (describe))
	pd.write('	type: "%s",\n' % (type))
	pd.write("	video: '%s',\n" % (video))
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

with open("template_video.html","r") as t:
	template = t.read()		
#template = open("template.html","r").read()


with open('video_output.html','w') as f:
	f.write(str(template[0:219]))
	f.write(str(var))
	f.write(str(template[224:1589]))
	f.write(str(var))
	f.write(str(template[1594:1675]))
	f.write(str(var))
	f.write(str(template[1690:1732]))
	f.write(str(var))
	f.write(str(template[1747:1864]))
	f.write(str(author))
	f.write(str(template[1869:1938]))
	f.write(str(author))
	f.write(str(template[1943:2004]))
	f.write(str(author))
	f.write(str(template[2009:len(template)]))
