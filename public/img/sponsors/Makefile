SPECIAL_PNGS := parrot.png
PNG_FILES := $(filter-out $(SPECIAL_PNGS), $(addsuffix .png,$(basename $(notdir $(wildcard src/*.eps)))))
PNG_RULE := %.png: src/%.eps

CONVERT := convert
LOGO_SIZE := 280x210
LOGO_FORMAT := -resize $(LOGO_SIZE) -gravity Center -background none -extent $(LOGO_SIZE)

ALL: $(PNG_FILES) $(SPECIAL_PNGS)

$(PNG_FILES): $(PNG_RULE)
	$(CONVERT) $^ $(LOGO_FORMAT) $@

parrot.png: $(PNG_RULE)
	$(CONVERT) $^ -crop 365x100+715+85 $(LOGO_FORMAT) $@

clean:
	rm -rf *.png

.PHONY: ALL
