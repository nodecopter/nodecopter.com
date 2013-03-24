CONVERT := convert
LOGO_SIZE := 140x105
LOGO_FORMAT := -resize $(LOGO_SIZE) -gravity Center -background none -extent $(LOGO_SIZE)

BEFORE_OPTIONS.parrot.png := -crop 365x100+715+85
BEFORE_OPTIONS.moviepilot.png := -extent 140x140 -gravity center
BEFORE_OPTIONS.co-up.png := -extent 1500x1500 -gravity center
BEFORE_OPTIONS.adobe.png := -extent 250x250 -gravity center
BEFORE_OPTIONS.vesseltracker.png := -extent 300x300 -gravity center
BEFORE_OPTIONS.vdlabs.png := -extent 2400x2000 -gravity center

define logo_file
$(addsuffix .png,$(basename $(notdir $(1))))
endef

define logo_step
$(call logo_file,$(1)): $(1)
	$(CONVERT) $(BEFORE_OPTIONS.$(call logo_file,$(1))) $$^ $(LOGO_FORMAT) $$@
endef

SOURCE_FILES := $(wildcard src/*.*)
LOGO_FILES   := $(call logo_file,$(SOURCE_FILES))

ALL: $(LOGO_FILES)

$(foreach source_file, $(SOURCE_FILES), $(eval $(call logo_step,$(source_file))))

.PHONY: ALL $(LOGO_FILES)
